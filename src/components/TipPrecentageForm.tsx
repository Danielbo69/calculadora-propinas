const tipOptions = [
  {
    id: "tip-0",
    value: 0,
    label: `0%`,
  },
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-30",
    value: 0.3,
    label: "30%",
  },
];

type TipPrecentageFormProps = {
    tip: number, 
    setTip: React.Dispatch<React.SetStateAction<number>>
}

function TipPrecentageForm({setTip, tip} : TipPrecentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>
      <form action="" className="flex justify-around">
        {tipOptions.map((tipOptions) => (
          <div className="flex gap-2 mt-2" key={tipOptions.id}>
            <label htmlFor="">{tipOptions.label}</label>
            <input 
                id={tipOptions.id}
                checked={tipOptions.value === tip}
                type="radio" 
                name="tip" 
                value={tipOptions.value} 
                onChange={e => setTip(+e.target.value)} />
          </div>
        ))}
      </form>
    </div>
  );
}

export default TipPrecentageForm;
