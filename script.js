// 1.ToDoList yazacaqsiz.Input olacaq və add buttonu olacaq.
// Bunlar form elementi içində olacaq.
// İnputa bir yazı yazıb add vəya enterə click etdiyinizdə bu form altinda listə yazilacaq.
// Yəni inputun dəyərin formun altinda ul icindəki li elementi içinə yazacaq.
// İnputa yazlb add etdiktən sonra İnput sifirlanacaq.
// Və hər əlavə edilən li yanında delete buttonu vəya delete icon olacaq.
// Ona Click olunanda o Li elementin siləcək.


const contain=document.getElementById("contain")
const body=document.getElementsByTagName("body")[0]
body.style.margin="0px"
body.style.padding="0px"
const Form = document.getElementById("myForm");
const Input = document.getElementById("name");
const Button = document.getElementById("submit");
const Ol = document.createElement("ol")
const RemoveAll = document.createElement("button")
contain.append(RemoveAll)
RemoveAll.textContent = "RemoveAll - ❌"

Form.append(Ol)
Button.addEventListener("click", (e) => {
    e.preventDefault();
    const Li = document.createElement("li")
    const Remove = document.createElement("button")
    Ol.append(Li)
    Remove.textContent = "Remove - ❌"
    Remove.style.border="0px"
Remove.style.backgroundColor="transparent"
Remove.style.color="white"
Li.style.display="flex"
Li.style.justifyContent="space-between"
Li.style.backgroundColor="blue"
Li.style.width="90%"
Li.style.border="3px solid white"
Li.style.margin="7px 0"

    Remove.addEventListener("click", () => {
        Ol.removeChild(Li);
    })
Remove.style.marginRight="5px"
    Li.textContent =Input.value
    Li.appendChild(Remove);
    Input.value = " "
});

RemoveAll.addEventListener("click", (e) => {
    e.preventDefault();
    while (Ol.firstChild) {
        Ol.removeChild(Ol.firstChild);
    }
});
contain.style.marginLeft="40%"
Ol.style.backgroundColor="red"
RemoveAll.style.border="0px"
RemoveAll.style.backgroundColor="transparent"
