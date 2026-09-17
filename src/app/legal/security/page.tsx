import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.security);
export default function SecurityPage() { return <LegalDocumentPage document={legalDocuments.security} />; }
