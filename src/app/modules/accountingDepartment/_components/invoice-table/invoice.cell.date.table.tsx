type Props = {
  value: Date | string;
};

const InvoiceCellDateTable = ({ value }: Props) => {
  const date = new Date(value);
  const formattedDate = date.toLocaleDateString("es-MX");
  return (
    <div className="w-full flex items-center h-full p-0.5">
      {formattedDate ?? "Without date"}
    </div>
  );
};

export default InvoiceCellDateTable;
