class Tenant {

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

    create = async ({ id, company_name, owner_firstname, owner_lastname, employee_strength, industry, website = null, description = null, avatar = null, created_by, updated_by, status = true }) => {
        try {
            this.#validateMandatoryFields([id, company_name, owner_firstname, owner_lastname, employee_strength, industry, created_by, updated_by]);

            const query = `
                INSERT INTO Tenants (id, company_name, owner_firstname, owner_lastname, employee_strength, industry, website, description, avatar, created_by, updated_by, status)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
            `;

            await this.#connection.execute(query, [
                id, company_name, owner_firstname, owner_lastname, employee_strength, industry, website, description, avatar, created_by, updated_by, status
            ]);

        } catch (error) {
            throw new Error(`Tenant.create(): ${error.message}`);
        }
    }
}

export default Tenant;