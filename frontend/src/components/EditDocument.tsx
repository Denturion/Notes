import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IDocument } from "../models/IDocument";

export function EditDocument() {
	const { id } = useParams();
	const [document, setDocument] = useState<IDocument[]>([]);

	const navigate = useNavigate();

	const getDoc = async () => {
		const response = await axios.get(`http://localhost:3000/users/${id}`);
		console.log("response", response.data);

		setDocument(response.data);
		console.log("Doc", document);
	};

	useEffect(() => {
		getDoc();
	}, []);

	const editorRef = useRef<any>(null);
	const titleRef = useRef<any>(null);

	function goBack() {
		navigate("/documents");
	}

	const editDoc = async () => {
		const response = await axios.put(
			`http://localhost:3000/users/${id}`,

			{
				documentName: titleRef.current.value,
				documentText: editorRef.current.getContent(),
			},
			{ headers: { "Content-Type": "application/json" } }
		);
		goBack();
		return response.data;
	};
	let docEditor = document.map((doc: IDocument) => {
		return (
			<>
				<div className="createDocument">
					<form onSubmit={editDoc}>
						<input type="text" placeholder="Title" ref={titleRef} />
						<Editor
							apiKey="vck3cc5c2lks5aiu30cnann0qwdcfcq1ynjwxy5nb3nkakgk"
							onInit={(evt, editor) => (editorRef.current = editor)}
							initialValue={doc.documentText}
							init={{
								height: 500,
								menubar: false,
								plugins: [
									"advlist autolink lists link image charmap print preview anchor",
									"searchreplace visualblocks code fullscreen",
									"insertdatetime media table paste code help wordcount",
								],
								toolbar:
									"undo redo | formatselect | " +
									"bold italic backcolor | alignleft aligncenter " +
									"alignright alignjustify | bullist numlist outdent indent | " +
									"removeformat | help",
								content_style:
									"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
							}}
						/>
						{/* <button onClick={editDoc}>Save</button> */}
						<a href="/documents" onClick={editDoc}>
							Save
						</a>
						{/* <button onClick={goBack}>Go back</button> */}
						<a href="/documents" onClick={goBack}>
							Go back
						</a>
					</form>
				</div>
			</>
		);
	});
	return <main>{docEditor}</main>;
}
