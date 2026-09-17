import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.gdpr);
export default function GDPRPage() { return <LegalDocumentPage document={legalDocuments.gdpr} />; }
