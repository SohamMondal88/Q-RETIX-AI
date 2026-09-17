import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.dataRights);
export default function DataRightsPage() { return <LegalDocumentPage document={legalDocuments.dataRights} />; }
