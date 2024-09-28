const Module = {
    getIdFromModulename: (moduleNames) => {
        const placeholders = moduleNames.map((module) => `'${module}'`).join(', ');
        const sql = `SELECT id FROM modules WHERE module_name IN (${placeholders})`;
        return sql;
    }
}

export default Module;