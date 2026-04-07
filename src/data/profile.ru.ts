export const profileRu = {
  name: "Илья Гарбуз",
  role: "Full Stack разработчик",
  summary:
    "Разработка масштабируемых веб-приложений на современном стеке: устойчивые API, аккуратные интерфейсы и деплой, которым можно доверять.",
} as const;

export function profilePageTitleRu(): string {
  return `${profileRu.name} — ${profileRu.role}`;
}
