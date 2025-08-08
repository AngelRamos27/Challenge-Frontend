import { CButton } from "@coreui/react";
import ImportCsvIcon from "../../../../components/icons/import-csv-icon";
import { useCSVImporter } from "../_hooks/useCSVImporter";

const CSVImporter = () => {
  const { fileInputRef, handleFileUpload, triggerFileInput } = useCSVImporter();

  return (
    <div className="flex w-full items-end justify-end">
      <CButton
        color="dark"
        className="w-auto h-auto"
        onClick={triggerFileInput}
      >
        <div className="flex flex-row">
          <ImportCsvIcon className="w-5 h-5" />
          <span className="hidden sm:inline ml-2">Import CSV</span>
        </div>
      </CButton>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default CSVImporter;
