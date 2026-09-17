import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.aiTransparency);
export default function AITransparencyPage() { return <LegalDocumentPage document={legalDocuments.aiTransparency} />; }
