
// import React from 'react'
// const [category, setCategory] = useState( "design");

// function Cat() {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     db.collection("projects")
//       .where("category", "==", category)
//       .get()
//       .then((snapshot) => {
//         let data = [];
//         snapshot.forEach((doc) => {
//           data.push({
//             ...doc.data(),
//             id: doc.id,
//           });
//           return data;
//         });

//         setCourses(data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, [category]);

//   return courses;
//   <div>
//   <button
//           className="projects__controls__button"
//           onClick={() => setCategory("web")}
//           style={{ color: theme.color, borderColor: theme.color }}
//         >
//           Web
//         </button>
//         <button
//           className="projects__controls__button"
//           onClick={() => setCategory("design")}
//           style={{ color: theme.color, borderColor: theme.color }}
//         >
//           Design
//         </button>
//     </div>
// }

// const courses = useCourses();




// export default Cat




// import React from "react";
// import CategoryCard from "./CategoryCard";

// const Cat = props => (
//   <div>
//     {props.categories.map(element => (
//       <CategoryCard
//         key={element.id}
//         categId={element.id}
//         src={element.image.src}
//         name={element.name}
//       />
//     ))}
//   </div>
// );

// export default Cat;









// export default function Cat({name}){
//     return name;
// }
// class Cat extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {    this.setState({value: event.target.value});  }
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite flavor:
//             <select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

// export default Cat
// import React from "react";

// import React, { useEffect, useState } from "react";


// let initialData = {
//   data: [
//           {
//             categories: ["Shopping List",'Groceries List','Youtube Tasks'],
//             name: "Get Groceries",
//             desc: "Essentials are very important to have an amazing life",
//             dueDate: new Date(),
//             isFavorite: true,
//             isVisible:true,
//           }
//       ],
    
  // addTask: () => {},
  // removeTask: () => {},
  // setModalOpen: () => {},
  // modalState: false,
  // catToShow:[],
  // doesTaskAlreadyExist:()=>{return false},
  // editTask:()=>{},
  // getAllCategories:()=>{},
  // getAllTasks:()=>{},
  // saveEditedTask:()=>{},
  // taskToEdit:undefined,
  // clearTaskToEdit:()=>{},
  // filterBySearch:()=>{},
// };
// const DataContext = React.createContext(initialData)




// const [allData, setAllData] = useState(initialData);
// initialData.getAllCategories = getAllCategories;


// function getAllCategories(){
//   const categoriesSet = new Set();
//   let arr = [];
//   let contextData = this.data;
//   for (let i = 0; i < contextData.length; i++) {
//     const element = contextData[i];
//     element?.categories.forEach(item => categoriesSet.add(item));
//   }
//   const myIterator = categoriesSet.values();
//   for (const entry of myIterator) {
//     arr = [...arr,entry];
//   }
//   return arr;
// }

// export default DataContext;




{/* <div>




<div className="form-field">
  <label htmlFor="service">Service(s)</label>
  {serviceList.map((singleService, index) => (
    <div key={index} className="services">
      <div className="first-division">
        <input
          name="service"
          type="text"
          id="service"
          placeholder=""
          value={singleService.service}
          onChange={(e) => handleServiceChange(e, index)}
          required
        />
        {serviceList.length - 1 === index && serviceList.length < 4 && (
          <button
            type="button"
            onClick={handleServiceAdd}
            className="add-btn"
          >
            <span>Add a Service</span>
          </button>
        )}
      </div>
      <div className="second-division">
        {serviceList.length !== 1 && (
          <button
            type="button"
            onClick={() => handleServiceRemove(index)}
            className="remove-btn"
          >
            <span>Remove</span>
          </button>
        )}
      </div>
    </div>
  ))}
</div>
<div className="output">
  <h2>Output</h2>
  {serviceList &&
    serviceList.map((singleService, index) => (
      <ul key={index}>
        {singleService.service && <li>{singleService.service}</li>}
      </ul>
    ))}

</div> */}






// const [serviceList, setServiceList] = useState([{ service: "" }]);

  // const handleServiceChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...serviceList];
  //   list[index][name] = value;
  //   setServiceList(list);
  // };

  // const handleServiceRemove = (index) => {
  //   const list = [...serviceList];
  //   list.splice(index, 1);
  //   setServiceList(list);
  // };

  // const handleServiceAdd = () => {
  //   setServiceList([...serviceList, { service: "" }]);
  // };
