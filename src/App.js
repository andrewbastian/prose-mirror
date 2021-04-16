import React, { useEffect } from "react";
import { menu, keymap, baseKeymap } from "./editorComponents/editorMenu.js";
import "./simpleEditor.css";

import "./editor.css";

import "./site.css";

import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";

function App() {
    useEffect(() => {
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
