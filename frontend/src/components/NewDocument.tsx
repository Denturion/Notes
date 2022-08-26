import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";

export function NewDocument() {
	const editorRef = useRef<any>(null);
	const titleRef = useRef<any>(null);

	const submitDoc = async () => {
		const response = await axios.post(
			`http://localhost:3000/users/add`,

			{
				documentName: titleRef.current.value,
				documentText: editorRef.current.getContent(),
			},
			{ headers: { "Content-Type": "application/json" } }
		);
		return response.data;
	};

	return (
		<>
			<div className="createDocument">
				<form onSubmit={submitDoc}>
					<input type="text" placeholder="Title" ref={titleRef} />
					<Editor
						onInit={(evt, editor) => (editorRef.current = editor)}
						initialValue="<p>Skriv din text här.</p>"
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
					<button onClick={submitDoc}>Save</button>
				</form>
			</div>
		</>
	);
}
