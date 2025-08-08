export const InvoiceCellTable = (props: { value: string }) => {
  return (
    <div className="w-full flex items-center h-full p-0.5">
      {props.value === "" || props.value === undefined
        ? "Invalid data"
        : props.value}
    </div>
  );
};

export default InvoiceCellTable;
