import { useState } from "react";
import "./App.css";
import json from "./data.json";

const List = ({ list, addNodeToList, deleteNodeFromList }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
          {node.isFolder && (
            <span
              onClick={() =>
                setIsExpanded((prev) => ({
                  ...prev,
                  [node.id]: !prev[node.id],
                }))
              }
            >
              {isExpanded?.[node.id] ? "-" : "+"}
            </span>
          )}
          <span>{node.name}</span>
          {node?.isFolder && (
            <span onClick={() => addNodeToList(node.id)}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/482/482686.png"
                alt="icon"
                className="icon"
              />
            </span>
          )}

          <span onClick={() => deleteNodeFromList(node.id)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
              alt="icon"
              className="icon"
            />
          </span>
          {isExpanded?.[node.id] && node?.children && (
            <List
              list={node.children}
              addNodeToList={addNodeToList}
              deleteNodeFromList={deleteNodeFromList}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const name = prompt("Enter name");
    if (!name?.trim()) return;

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...(node.children || []),
              { id: Date.now(), name: name, isFolder: true, children: [] },
            ],
          };
        }

        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  const deleteNodeFromList = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return {
              ...node,
              children: updateTree(node.children),
            };
          }
          return node;
        });
    };
    setData((prev) => updateTree(prev));
  };

  return (
    <div className="App">
      <h1>File/Folder Explorer</h1>
      <List
        list={data}
        addNodeToList={addNodeToList}
        deleteNodeFromList={deleteNodeFromList}
      />
    </div>
  );
}
