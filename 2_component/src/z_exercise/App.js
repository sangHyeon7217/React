import{ useState } from "react";

function MyMenu() {
  
  const [items,setItems] = useState([
    { id: 1, name: "사과", count: 3 },
    { id: 2, name: "배", count: 3 },
    { id: 3, name: "귤", count: 3 }
  ]);


//증가
const increment =(id)=> {setItems(items.map(item=>item.id ===id?{
  ...item,count:item.count +1} :item
  )
);
};

//감소

const decrement =(id)=>{setItems(items.map(item=>item.id ===id?{
  ...item,count:Math.max(item.count -1,0)} :item
));
};


 return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => decrement(item.id)}>▼</button>
          {item.count}
          <button onClick={() => increment(item.id)}>▲</button>
        </div>
      ))}
    </div>
  );
  
}
  
export default MyMenu;
