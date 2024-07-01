export function Number(props:{state:any,setState:any}){
    const {state,setState} = props;
    function handle(e:any){
        if(e.target.value.length<=7){
            setState(e.target.value);
        }
    }
    return (
      <div className="flex items-center rounded-md overflow-hidden">
        <div className="p-2 bg-gray-600">#</div>
        <input
          type="number"
          className="p-2 w-full bg-slate-500 focus:outline-none"
          placeholder="hex"
          value={state}
          onChange={handle}
        />
      </div>
    );

}