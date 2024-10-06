import bcrypt from 'bcryptjs';

class User {

    #connection;

    constructor(connection) {
        this.#connection = connection;
    }

    #validateMandatoryFields(fields) {
        for (const field of fields) {
            if (!field || typeof field !== 'string' || !field.trim()) {
                throw new Error("All mandatory fields must be provided and cannot be empty.");
            }
        }
    }

    #validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
        if (!passwordRegex.test(password)) {
            throw new Error("Password must be at least 6 characters long, contain one uppercase letter, one number, and one special character.");
        }
    }

    create = async ({ id, tenant_id, username, password, firstname, lastname, role, designation = null, department = null, avatar = null, created_by, updated_by, status = true }) => {
        try {
            this.#validateMandatoryFields([id, tenant_id, username, password, firstname, lastname, role, created_by, updated_by]);

            const existingUserQuery = 'SELECT id FROM Users WHERE username = ?';
            const [existingUsers] = await this.#connection.execute(existingUserQuery, [username]);

            if (existingUsers.length > 0) {
                throw new Error("Username already exists.");
            }
            this.#validatePassword(password);

            const hashedPassword = await bcrypt.hash(password, 10);

            const query = `
                INSERT INTO Users (id, tenant_id, username, password, firstname, lastname, role, designation, department, avatar, created_by, updated_by, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            await this.#connection.execute(query, [
                id, tenant_id, username, hashedPassword, firstname, lastname, role, designation, department, avatar, created_by, updated_by, status
            ]);

        } catch (error) {
            throw new Error(`User.create(): ${error.message}`);
        }
    }
}

export default User;