export class AddStudentPage extends Page {
  constructor() {
    super("Add New Student");
  }

  createElement() {
    super.createElement();

    let firstName = new Text("txtFirstName", "First Name");
    firstName.appendToElement(this.element);

    let lastName = new Text("txtlastName", "Last Name");
    lastName.appendToElement(this.element);

    let studentId = new Text("txtstudentId", "Student Id");
    studentId.appendToElement(this.element);

    let email = new Text("txtEmail", "Email");
    email.appendToElement(this.element);

    let createdDate = new Number("txtCreatedDate", "Created Date");
    createdDate.appendToElement(this.element);

    let btn = new Button("Save");
    btn.appendToElement(this.element);
    btn.element.click(() =>
      this.saveStudent(
        firstName.getValue(),
        lastName.getValue(),
        studentId.getValue(),
        email.getValue(),
        createdDate.getValue()
      )
    );
  }

  getElementString() {
    return '<div style="margin:20px;"><h3>New Student</h3></div>';
  }

  saveStudent(firstName, lastName, studentId, email, createdDate) {
    let student = new Student(firstName, lastName, email, studentId, createdDate);
    console.log(student);
    application
      .postData("https://ip-uacs.herokuapp.com/api/student", student)
      .then((result) => {
        console.log(result);
      });
  }
}
