import { v4 as uuid } from "uuid";
import { db } from "../database";

export const createNewListingRoute = {
    method: 'POST', 
    path: '/api/listings',
    handler: async (req, h) => {
        const id = uuid();
        const { student_major = '', student_name = '', student_catalog_year = '', student_classes = []} = req.payload;
        const student_classes_json = JSON.stringify(student_classes);

        await db.query(`
        INSERT INTO student (student_major, student_name, student_catalog_year, student_classes)
        VALUES(?, ?, ?, ?);
        `,
        [student_major, student_name, student_catalog_year, student_classes_json]
        );

        return {student_major, student_name, student_catalog_year, student_classes_json};
    }
}