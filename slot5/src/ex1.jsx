export function Ex1() {
  const double = x=>x*2;
  const islane = x => x>0;
  
    return (
    <>
      <h1>Ex 1</h1>
      <p>This is the first exercise component.</p>
      <p>Hàm double(5) : {double(5)}</p>
      <p>Số 5 là: {islane(5) ?"số dương": "số âm"}   </p>
    </>
  );
}