import "../src/MyComponents/style.css"
export const userColumns = [,
    {
      field: "img",
      headerName: "Img",
      width: 50,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.img}
          </div>
        );
      },
    },
    {
      field: "username",
      headerName: "Username",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
   
  
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "address",
      headerName: " Assigned to",
      width: 230,
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];
  export const normaluserColumns = [,
    // {
    //   field: "img",
    //   headerName: "Img",
    //   width: 50,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellWithImg">
    //         <img className="cellImg" src={params.row.img} alt="avatar" />
    //         {params.row.img}
    //       </div>
    //     );
    //   },
    // },
    {
      field: "username",
      headerName: "Username",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
   
  
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    // {
    //   field: "houseno",
    //   headerName: "House no",
    //   width: 230,
    // },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
  ];
  