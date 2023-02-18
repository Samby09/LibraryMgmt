const issuedBooks = [];

function addIssuedBook() {
  const bookName = document.getElementById("book-name").value;
  const issuedTo = document.getElementById("issued-to").value;
  const issuedTime = new Date().toLocaleString();
  const status = "not returned";
  const id = issuedBooks.length + 1;
  issuedBooks.push({id, book_name: bookName, issued_to: issuedTo, issued_time: issuedTime, status});
  displayIssuedBooks();
}

function displayIssuedBooks() {
  const tableBody = document.getElementById("issued-books");
  tableBody.innerHTML = "";
  for (const book of issuedBooks) {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = book.id;
    row.appendChild(idCell);

    const bookNameCell = document.createElement("td");
    bookNameCell.textContent = book.book_name;
    row.appendChild(bookNameCell);

    const issuedToCell = document.createElement("td");
    issuedToCell.textContent = book.issued_to;
    row.appendChild(issuedToCell);

    const issuedTimeCell = document.createElement("td");
    issuedTimeCell.textContent = book.issued_time;
    row.appendChild(issuedTimeCell);

    const statusCell = document.createElement("td");
    const statusSelect = document.createElement("select");
    const notReturnedOption = document.createElement("option");
    notReturnedOption.value = "not returned";
    notReturnedOption.textContent = "Not Returned";
    const returnedOption = document.createElement("option");
    returnedOption.value = "returned";
    returnedOption.textContent = "Returned";
    statusSelect.appendChild(notReturnedOption);
    statusSelect.appendChild(returnedOption);
    statusSelect.value = book.status;
    statusSelect.addEventListener("change", function() {
      book.status = this.value;
      updateStatusColor(statusText, book.status);
    });
    const statusText = document.createElement("span");
    statusText.textContent = book.status;
    updateStatusColor(statusText, book.status);
    statusCell.appendChild(statusSelect);
    statusCell.appendChild(statusText);
    row.appendChild(statusCell);

    tableBody.appendChild(row);
  }
}

function updateStatusColor(statusText, status) {
  if (status === "returned") {
    statusText.classList.add("returned");
    statusText.classList.remove("not-returned");
  } else {
    statusText.classList.add("not-returned");
    statusText.classList.remove("returned");
  }
}

displayIssuedBooks();
