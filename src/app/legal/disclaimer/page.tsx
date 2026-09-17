import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.disclaimer);
export default function DisclaimerPage() { return <LegalDocumentPage document={legalDocuments.disclaimer} />; }
