const body = document.querySelector("body");
const profile = {
    fname: "John Doe",
    age: 30,
    profession: "Web Developer",
    hobbies: ["Reading", "Hiking", "Photography"]
}

const mkDiv = document.createElement("div");
mkDiv.classList.add("profile-card");
// membuat div.profile-card

const fullName = document.createElement("h2");
fullName.innerHTML = `${profile.fname}`;
mkDiv.append(fullName);
// h2{profile.fname}

const newParag = document.createElement("p");
newParag.innerHTML = `Umur: ${profile.age}, Profesi: ${profile.profession}`;
mkDiv.append(newParag);
// menambah nama dan profesi pada p

const ulHobi = document.createElement("ul");
// simpan hobi pada list tidak berurut
for (let i in profile.hobbies) {
    const liHobi = document.createElement("li");
    const { hobbies } = profile;

    liHobi.innerHTML = hobbies[i];
    ulHobi.append(liHobi);
}

mkDiv.append(ulHobi);
body.append(mkDiv);
// simpan div.profile-card pada body
