// Challenge sorce: https://leetcode.com/problems/unique-email-addresses/description/
let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]


const compose = (fx, fy) => {
  return v => {
    return fx(fy(v))
  }
}
const removeDot = string => string.replace(/\./g, '')

const ignoreEverythingAfterPlus = string => {
  const [aux] = string.split('+');
  return aux;
}
const validEmail = compose(ignoreEverythingAfterPlus, removeDot, formatedEmail)

const formatedEmail = (name, domain) => `${name}@${domain}` 

const onlyUnique = (value, index, self) => { 
    return self.indexOf(value) === index;
}

function parameterize(email){ 
  let parts = email.split('@')
  let [name, domain] = parts 
  let cleanName = validEmail(name)
  return formatedEmail(cleanName, domain);
}



const numUniqueEmails = function(emails) {
  
  const emailsParemeterize = emails.map( email => { 
    return parameterize(email)
  })

  let unique = emailsParemeterize.filter(onlyUnique)

  return unique.length
};

console.log(numUniqueEmails(emails))