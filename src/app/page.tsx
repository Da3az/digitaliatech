import ModalContainer from "@/components/ModalContainer";
import Nav from "@/components/Nav";
import { ModalProvider } from "@/contexts/ModalContext";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen relative flex-col items-center justify-between p-24 `}
    >
      <ModalProvider>
        <ModalContainer>
          <Nav />
        </ModalContainer>
      </ModalProvider>
    </main>
  );
}
