// create the Profile
const generateProfile=function(employees) {

// create the Manager HTML
const generateManager=function(manager) {
    return `
<div class="employee-card col-3 mt-3 h-100">
    <div class="card-header bg-warning">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title bg-warning"><span class="material-icons">supervisor_account</span> ${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getofficeNumber()}</li>
        </ul>
    </div>
</div>
`;
};

// create the Engineer HTML
const generateEngineer=function(engineer) {
    return `
<div class="employee-card col-3 mt-3 h-100">
    <div class="card-header bg-warning">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title bg-warning"><span class="material-icons">build</span> ${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
`;
};

// create the html for interns
const generateIntern=function(intern) {
    return `
<div class="employee-card col-3 mt-3 h-100">
    <div class="card-header bg-warning">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title bg-warning"><span class="material-icons">loyalty</span> ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
`;
};

    const html=[];

    //filtering Manager
    html.push(employees
        .filter(employee=>employee.getRole()==="Manager")
        .map(manager=>generateManager(manager))
    );
    //filtering Engineer
    html.push(employees
        .filter(employee=>employee.getRole()==="Engineer")
        .map(engineer=>generateEngineer(engineer))
        .join("")
    );
    //filtering Intern
    html.push(employees
        .filter(employee=>employee.getRole()==="Intern")
        .map(intern=>generateIntern(intern))
        .join("")
    );

    return html.join("");
}


// export function to generate entire page
module.exports=employees=> {
    return `

<!DOCTYPE html>
<html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin Sans" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      </head>
    
    <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-text" id="navbar-text">Team Profile</span>
          </nav>    
      </header>
      <main>
        <div class="container-fluid">
            <div class="row col-12 col-md-auto bg-light p-3">
                ${generateProfile(employees)}
            </div>
        </div>
      </main>
    </body>
</html>
    `;
};