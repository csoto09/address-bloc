const inquirer = require('inquirer')
const ContactController = require('./ContactController')

module.exports = class MenuController {
    constructor() {
        this.mainMenuQuestions = [
            {
             type: "list",
              name: "mainMenuChoice",
              message: "Please choose from an option below: ",
              choices: [
                "Add new contact",
                "See current date and time",
                "Exit"
              ]
            }
          ];
          this.book = new ContactController();
    }

    main(){
        console.log(`Welcome to AddressBloc!`)
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice) {
                case "Add new contact":
                  this.addContact()
                  break
                case "See current date and time":
                  this.getDate()
                  break
                case "Exit":
                  this.exit()
                default:
                  console.log("Invalid input")
                  this.main()
            }
        })
        .catch((err) => {
            console.log(err)
        })
      }
   
    clear(){
        console.log("\x1Bc");
      }
    
    addContact() {
        this.clear()
        inquirer.prompt(this.book.addContactQuestions).then((answers) => {
          this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
            console.log("Contact added successfully!")
            this.main()
          }).catch((err) => {
            console.log(err)
            this.main()
          })
        })
    }

    getDate() {
      const currentDate = new Date()
      const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: "2-digit", timeZoneName: "short"}
      this.clear()
      console.log(`The current date and time is: ${currentDate.toLocaleString('en-US', options)}`)
      this.main()
    }
    exit() {
        console.log("Thanks for using AddressBloc!")
        process.exit()
    }

    getContactCount() {
      return this.contacts.length
    }
    remindMe() {
      return `Learning is a life-long pursuit.`
    }
}