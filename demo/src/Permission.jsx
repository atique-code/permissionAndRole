// import React, { useState } from "react";
// import { Rols } from "./Roles";

// // Define your custom icons here
// const CustomIcons = {
//   create: "far fa-plus",
//   update: "fas fa-pen",
//   delete: "far fa-trash-alt",
//   read: "fas fa-glasses",
// };

// function PermissionAndRole() {

//    // Define state to track click status
//    const [clickStatus, setClickStatus] = useState({});

//   //  let isActionEnabled;

//    // Function to toggle click status for an action
//    const toggleClickStatus = (isActionEnabled) => {

//     setClickStatus(!isActionEnabled)
//     //  const iconValue = CustomIcons[action]; // Get the icon value
//     //  console.log(`Clicked on ${entity} icon with value: ${iconValue}`); // Log the value with entity name
//     //  setClickStatus((prevStatus) => ({
//     //    ...prevStatus,
//     //    [`${entity}_${action}`]: !prevStatus[`${entity}_${action}`],
//     //  }));

//    };

//    console.log(clickStatus)
//   return (
//     <div className="p-4 flex">
//       <div className="space-y-4 flex">
//         {Rols.roles.map((role, index) => {
//           return (
//             <div key={index} className="border p-4">
//               <h2 className="text-xl font-semibold">{role.name}</h2>
//               <p className="text-gray-500">{role.description}</p>
//               <div className="mt-4 flex">
//                 {Object.keys(role.permissions).map((entity, idx) => {
//                   return (
//                     <div key={idx}>
//                       <div className="mb-2">{entity}</div>
//                       <div className="flex flex-col items-center">
//                         {Object.keys(role.permissions[entity]).map(
//                           (action, i) => {
//                             // console.log(action);
//                             let isActionEnabled =
//                               role.permissions[entity][action];
//                             const iconClassName = isActionEnabled
//                               ? "text-green-500"
//                               : "text-gray-400";
//                             const bgColor =
//                               role.permissions[entity].create && action === "create"
//                                 ? "bg-yellow-200"
//                                 : "bg-gray-200";

//                                 // console.log(bgColor);

//                             return (
//                               <span
//                                 key={i}
//                                 // className={`mt-2 ${iconClassName} ${bgColor} px-2 py-1 rounded cursor-pointer`}
//                                 style={{marginTop: 2, backgroundColor: `${isActionEnabled ? "yellow" : "gray" }`, paddingLeft: '2px', paddingRight: '2px', cursor: 'pointer', borderRadius: '5px'}}
//                                 onClick={() =>
//                                   toggleClickStatus(isActionEnabled)
//                                 }
//                               >
//                                 <i className={CustomIcons[action]} />
//                               </span>
//                             );
//                           }
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default PermissionAndRole;


/////////////////////////////////////////////////////







import React, { useState } from "react";
import { Rols } from "./Roles";

// Define your custom icons here
const CustomIcons = {
  create: "far fa-plus",
  update: "fas fa-pen",
  delete: "far fa-trash-alt",
  read: "fas fa-glasses",
};

function PermissionAndRole() {
  // Define state to track the enabled status of each action
  const [actionEnabled, setActionEnabled] = useState({});
  const [hoveredRole, setHoveredRole] = useState(null);

  // Function to toggle the enabled status of a specific action
  const toggleActionEnabled = (entity, action) => {
    const iconKey = `${entity}_${action}`;
    setActionEnabled((prevStatus) => ({
      ...prevStatus,
      [iconKey]: !prevStatus[iconKey],
    }));
  };

  console.log(actionEnabled);

  return (
    <div className="p-4 flex">
      <div className="space-x-4 flex">
        {Rols.roles.map((role, index) => {
          return (
            <div key={index} className="border p-4">
              <h2
                className="text-xl font-semibold"
                style={{
                  cursor: "pointer",
                  transition: "color 0.3s",
                  // color: hoveredRole === role.name ? "blue" : "",
                }}
                onMouseEnter={() => setHoveredRole(role.name)}
                onMouseLeave={() => setHoveredRole(null)}
              >
                {role.name}
              </h2>
              {hoveredRole === role.name && (
                <p className="text-gray-500">{role.description}</p>
              )}
              <div className="mt-4">
                <div className="flex flex-wrap -mx-2">
                  {Object.keys(role.permissions).map((entity, idx) => {
                    return (
                      <div key={idx} className="w-1/4 mb-4 px-2">
                        <div className="mb-2 relative">
                          <div className="tooltip">
                            {entity}
                            <span className="tooltiptext">
                              {role.permissions[entity].description}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {Object.keys(role.permissions[entity]).map(
                            (action, i) => {
                              const iconKey = `${entity}_${action}`;
                              const isActionEnabled = actionEnabled[iconKey];

                              return (
                                <span
                                  key={i}
                                  style={{
                                    marginTop: 2,
                                    backgroundColor: `${
                                      isActionEnabled ? "gray" : "yellow"
                                    }`,
                                    paddingLeft: "2px",
                                    paddingRight: "2px",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                  }}
                                  onClick={() =>
                                    toggleActionEnabled(entity, action)
                                  }
                                >
                                  <i className={CustomIcons[action]} />
                                </span>
                              );
                            }
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PermissionAndRole;
