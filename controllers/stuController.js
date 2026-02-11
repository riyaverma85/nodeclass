const homePage = (req,res)=>{
    res.render("home")
}
const aboutPage = (req,res)=>{
    res.render("about")
}
const facultyPage = (req,res)=>{
    res.render("faculty")
}
const coursePage = (req,res)=>{
    res.render("services")
}
const contactPage = (req,res)=>{
    res.render("contact")
}
const servicesPage = (req,res)=>{
    res.render("services")
}


module.exports = {
    homePage,
    aboutPage,
    facultyPage,
    coursePage,
    servicesPage,
    contactPage
}