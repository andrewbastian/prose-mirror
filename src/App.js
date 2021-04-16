import React, { useEffect } from "react";
import { menu, keymap, baseKeymap } from "./editorComponents/editorMenu.js";
import "./editor.css";
import "./site.css";

import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
//replace these
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { exampleSetup } from "prosemirror-example-setup";

function App() {
    useEffect(() => {
        const mySchema = new Schema({
            nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
            marks: schema.spec.marks,
        });
        window.view = new EditorView(document.querySelector("#editor"), {
            state: EditorState.create({
                doc: DOMParser.fromSchema(schema).parse(
                    document.querySelector("#content")
                ),
                plugins: [keymap(baseKeymap), menu],
            }),
        });
    });
    return (
        <div className="App">
            <div id="editor" />
            <div id="content" />
            Write something great!
        </div>
    );
}

export default App;
