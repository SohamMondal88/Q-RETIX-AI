import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments, legalMetadata } from "@/lib/legal";

export const metadata = legalMetadata(legalDocuments.privacy);
export default function PrivacyPolicyPage() { return <LegalDocumentPage document={legalDocuments.privacy} />; }
