export const Data_Structure = {
  headers: [
    {
      display: "Item No",
      id: "3",
      level: 1,
      primary: true,
      subColumns: []
    },
    {
      display: "Parent Column 1",
      id: "1",
      level: 1,
      subColumns: [
        {
          display: "Child Column 1",
          id: 11,
          level: 2,
          subColumns: [
            {
              id: 111,
              level: 3,
              display: "subCol1",
              primary: true,
              subColumns: [
                {
                  id: 1111,
                  level: 4,
                  display: "subsubCol1",
                  subColumns: [
                    {
                      id: 1111,
                      level: 5,
                      display: "subsubsubCol1"
                    }
                  ]
                },
                {
                  id: 1112,
                  level: 4,
                  display: "subsubCol2"
                }
              ]
            },
            {
              id: 112,
              level: 3,
              primary: true,
              display: "subCol2"
            },
            {
              id: 113,
              level: 3,
              primary: true,
              display: "subCol3"
            },
            {
              id: 114,
              level: 3,
              primary: true,
              display: "subCol4"
            }
          ]
        }
      ]
    },
    {
      display: "Parent Column 2",
      id: "2",
      level: 1,
      primary: true,
      subColumns: [
        {
          display: "Child Column 1",
          id: 21,
          level: 4,
          subColumns: []
        },
        {
          display: "Child Column 2",
          id: 22,
          level:4,
          subColumns: []
        },
        {
          display: "Child Column 3",
          id: 23,
          level: 4,
          subColumns: []
        }
      ]
    },
    {
      display: "Custom Col 1",
      id: "5",
      level: 3,
      primary: true,
      subColumns: []
    },
    {
      display: "Quantity",
      id: "6",
      level: 3,
      primary: true,
      subColumns: []
    },
    {
      display: "Qty 2",
      id: "7",
      level: 3,
      primary: true,
      subColumns: []
    },
    {
      display: "Estimated",
      id: "8",
      level: 3,
      primary: true,
      subColumns: []
    },
    {
      display: "Cust 2 Col",
      id: "9",
      level: 3,
      primary: true,
      subColumns: []
    },
    {
      display: "random column",
      id: "10",
      level: 3,
      primary: true,
      subColumns: []
    },
    {
      display: "Actions",
      id: "actions",
      level: 3,
      primary: true,
      subColumns: []
    }
  ],

  body: [
    {
      "1": {
        id: "1",
        subColumns: [
          {
            id: 11,
            subColumns: [
              {
                id: 111,
                // data: "enter value"
                subColumns: [
                  {
                    id: 1111,
                    level: 4,
                    // data: "subsubCol1",
                    subColumns: [
                      {
                        id: 11111,
                        data: "Enter Value Here"
                      }
                    ]
                  },
                  {
                    id: 1112,
                    level: 4,
                    data: "subsubCol2"
                  }
                ]
              },
              {
                id: 112,
                data: "enter value"
              },
              {
                id: 113,
                data: "enter value"
              },
              {
                id: 114,
                data: "enter value"
              }
            ]
          }
        ]
      },
      "2": {
        id: "2",
        subColumns: [
          {
            data: "enter value",
            id: 21,
            subColumns: []
          },
          {
            data: "enter value",
            id: 22
          },
          {
            data: "enter value 3",
            id: 23
          }
        ]
      },
      "3": {
        id: "3",
        data: "enter value"
      },
      "5": {
        id: "3",
        data: "enter value"
      },
      "6": {
        id: "3",
        data: "enter value"
      },
      "7": {
        id: "3",
        data: "enter value"
      },
      "8": {
        id: "3",
        data: "enter value"
      },
      "9": {
        id: "3",
        data: "enter value"
      },
      "10": {
        id: "3",
        data: "enter value"
      },
      actions: {
        id: "3",
        data: "****"
      }
    }
  ]
};

for (let i = 0; i < 20; i++) {
  Data_Structure.body.push(Data_Structure.body[0]);
}
