import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Documents.css";
import { IDocument } from "../models/IDocument";

export function Documents() {
	const [allDocuments, setallDocuments] = useState<IDocument[]>([]);

	const getDocs = async () => {
		const response = await axios.get(`http://localhost:3000/users`);
		console.log("response", response.data);

		setallDocuments(response.data);
		console.log("All docs", allDocuments);
	};

	useEffect(() => {
		getDocs();
	}, []);

	let docsMapped = allDocuments.map((docs: IDocument) => {
		return (
			<div key={docs.id} className="document">
				<h1 className="documentName">{docs.documentName}</h1>
				<p
					className="documentText"
					dangerouslySetInnerHTML={{ __html: docs.documentText }}
				></p>

				<div className="buttons">
					<Link to={`/viewDocument/${docs.id}`}>View</Link>
					<Link to={`/editDocument/${docs.id}`}>Edit</Link>
				</div>
			</div>
		);
	});

	return <main>{docsMapped}</main>;
}
