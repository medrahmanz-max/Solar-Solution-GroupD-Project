const express = require("express");
const cors = require("cors");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Solar Solutions backend is running"
    });
});

// Contact form API
app.post("/api/contact", (req, res) => {
    const { name, email, phone, message } = req.body;

    // Check required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Name, email and message are required"
        });
    }

    const sql = `
        INSERT INTO contact_submission 
        (name, email, phone, message)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, phone, message],
        (err, result) => {
            if (err) {
                console.error("Database error:", err);

                return res.status(500).json({
                    success: false,
                    message: "Failed to save contact submission"
                });
            }

            res.status(201).json({
                success: true,
                message: "Contact submission saved successfully",
                id: result.insertId
            });
        }
    );
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});