"use client";
import Table from "react-bootstrap/Table";

interface H{
  id : string;
  name : string;
  relate : string;
}

function educationProgramTable() {
  return (
    <>
      <Table id="TableMain" bordered >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td id="11">
              Mark
            </td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td id="22">Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

if (typeof document !== 'undefined') {
  document.addEventListener('mousemove', (event: MouseEvent) => {
    // Get the element under the mouse cursor
    const element = document.elementFromPoint(event.clientX, event.clientY);

    // Check if the element has an 'id' attribute
    if (element && element.tagName.toLowerCase() === 'td' && element.id) {
      // Log the element's id to the console
      hoverEdit(element.id);
    }
  });
}

function hoverEdit(id : string) {
  const a = document.getElementById(id);
  if (id == "22" && a) {
    a.style.color = "blue";
    a.style.backgroundColor = "red";
  } else if (id == "11" && a) {
    a.style.color = "red";
    a.style.backgroundColor = "blue";
  }
}

export default educationProgramTable;
