import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IDocument } from "../models/IDocument";
import { Link } from "react-router-dom";

export function ViewDocument() {
	const { id } = useParams();
	const [document, setDocument] = useState<IDocument[]>([]);

	const getDoc = async () => {
		const response = await axios.get(`http://localhost:3000/users/${id}`);
		console.log("response", response.data);

		setDocument(response.data);
		console.log("Doc", document);
	};

	useEffect(() => {
		getDoc();
	}, []);

	let docMapped = document.map((doc: IDocument) => {
		return (
			<div key={doc.id} className="document">
				<h1 className="documentName">{doc.documentName}</h1>
				<p
					className="documentText"
					dangerouslySetInnerHTML={{ __html: doc.documentText }}
				></p>

				<div className="buttons">
					<Link to={`/documents`}>Back</Link>
				</div>
			</div>
		);
	});

	return <main>{docMapped}</main>;
}
