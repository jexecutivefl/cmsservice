import React from 'react';
import List from "@/views/ProjectDashboard/components/List";

const Board = ({projectID}) => (
 <div style={{display: "flex", justifyContent: "space-between"}}>
    <List title="To Do" state="TODO" projectID={projectID} />
    <List title="In Progress" state="IN_PROGRESS" projectID={projectID} />
    <List title="Blocked" state="BLOCKED" projectID={projectID} />
    <List title="Testing" state="TESTING" projectID={projectID} />
    <List title="Done" state="DONE" projectID={projectID} />
 </div>
);

export default Board;
