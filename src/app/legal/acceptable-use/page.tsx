import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.acceptableUse);
export default function AcceptableUsePage() { return <LegalDocumentPage document={legalDocuments.acceptableUse} />; }
