export const InvoiceCellTable = (props: { value: string }) => {
  return (
    <div className="w-full flex items-center h-full p-0.5">
      {props.value ?? "Invalid data"}
    </div>
  );
};

export default InvoiceCellTable;
