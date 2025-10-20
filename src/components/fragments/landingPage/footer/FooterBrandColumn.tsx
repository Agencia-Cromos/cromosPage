import Image from "next/image";

export function FooterBrandColumn() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <Image src="/mobile_logo_dark.png" alt="CROMOS" height={100} width={100}/>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
        CROMOS - criando tecnologia sob demanda para impulsionar negócios de todos os tamanhos.
      </p>
    </div>
  );
}
