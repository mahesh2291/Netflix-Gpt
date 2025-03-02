

const checkValidData=(email,password,fullName)=>{

     const isEmailValid=/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
     const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
     const isFullName=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullName)
     if(!isEmailValid) return "Emaild Id is not valid";
     if(!isPasswordValid) return "password is not valid"
     if(!isFullName) return "Name not valid"

     return null

    }

export default checkValidData