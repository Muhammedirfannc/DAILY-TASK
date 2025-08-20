const departments = [
  { 
    name: "Sales", 
    employees: [
      { name: "Alice", sales: [120, 90, 150] },
      { name: "Bob", sales: [80, 200, 110] }
    ] 
  },
  { 
    name: "Marketing", 
    employees: [
      { name: "Charlie", sales: [50, 300, 90] },
      { name: "David", sales: [150, 220, 180] }
    ] 
  }
];

let total=0;
for(let{employees} of departments){
    for(let{sales} of employees){
        const sum=sales.filter((a)=>a>100).reduce((sum,a)=>sum+a,0);
        total +=sum;
    };
};
console.log(total);