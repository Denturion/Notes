const express = require("express");
const router = express.Router();

const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "documents",
	password: "documents",
	database: "documents",
});

/* Get ALL documents */
router.get("/", async (req, res) => {
	try {
		connection.execute(`SELECT * FROM documents`, (err, result) => {
			if (err) {
				return res.json(err);
			}
			console.log(result);
			res.json(result);
		});
	} catch (err) {
		console.log(err);
		res.json(err.message);
	}
});

/* Get documents by id */
router.get("/:id", async (req, res) => {
	try {
		connection.execute(
			`SELECT * FROM documents WHERE id = ?`,
			[req.params.id],
			(err, result) => {
				if (err) {
					return res.json(err);
				}
				console.log(result);
				res.json(result);
			}
		);
	} catch (err) {
		console.log(err);
		res.json(err.message);
	}
});

/* Add new documents */
router.post("/add", async (req, res) => {
	try {
		connection.execute(
			`INSERT INTO documents (documentName, documentText) VALUES (?, ?)`,
			[req.body.documentName, req.body.documentText],
			(err, result) => {
				if (err) {
					return res.json(err);
				}
				console.log(result);
				res.json(result);
			}
		);
	} catch (err) {
		console.log(err);
		res.json(err.message);
	}
});

/* Edit documents */
router.put("/:id", async (req, res) => {
	try {
		connection.execute(
			`UPDATE documents SET documentText = ? WHERE id = ?`,
			[req.body.documentText, req.params.id],
			(err, result) => {
				if (err) {
					return res.json(err);
				}
				console.log(result);
				res.json(result);
			}
		);
	} catch (err) {
		console.log(err);
		res.json(err.message);
	}
});

module.exports = router;
