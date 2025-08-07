export const InvoiceCellAmountTable = (props: { value: number }) => {
  if (typeof props.value !== "number" || isNaN(props.value)) {
    return (
      <div className="w-full flex items-center h-full p-0.5">Invalid data</div>
    );
  }

  return (
    <div className="w-full flex items-center h-full p-0.5">
      {`$${props.value.toFixed(2)}`}
    </div>
  );
};

export default InvoiceCellAmountTable;
