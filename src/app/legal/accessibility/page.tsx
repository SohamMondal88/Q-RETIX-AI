import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.accessibility);
export default function AccessibilityPage() { return <LegalDocumentPage document={legalDocuments.accessibility} />; }
