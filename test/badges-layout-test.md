# Nové varianty zarovnání badges v GitHub README

Tento soubor obsahuje další varianty řešení pro zarovnání textu doleva a badges doprava v GitHub README souborech. Cílem je najít metodu, která vytvoří vizuálně čistý layout bez viditelných okrajů tabulky.

## Varianta A: Tabulka s pevnou šířkou první buňky a 100% šířkou tabulky

<table width="100%">
  <tr>
    <td width="200" style="min-width:200px">Programovací jazyky:</td>
    <td width="100%" align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## Varianta B: Tabulka s pevnými šířkami obou buněk

<table width="100%" border="0">
  <tr>
    <td width="200">Programovací jazyky:</td>
    <td width="calc(100% - 200px)" align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## Varianta C: Markdown tabulka s šířkovou specifikací

| <div style="width:200px">Programovací jazyky:</div> | <div align="right">![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg)</div> |
| --------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## Varianta D: Dvoufázový přístup s img align

<table width="100%">
  <tr>
    <td>Programovací jazyky:</td>
    <td>
      <div align="right">
        <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
        <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
      </div>
    </td>
  </tr>
</table>

## Varianta E: Absolutní pozicování

<div style="position:relative;height:30px;">
  <div style="position:absolute;left:0;">Programovací jazyky:</div>
  <div style="position:absolute;right:0;">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
  </div>
</div>

## Varianta F: Jednoduchá HTML tabulka s explicitní šířkou

<table>
  <tr>
    <td width="300px">Programovací jazyky:</td>
    <td align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## Varianta G: HTML tabulka s colspan pro druhou buňku

<table width="100%">
  <tr>
    <td width="200">Programovací jazyky:</td>
    <td align="right" colspan="3">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## Varianta H: HTML tabulka s nobr pro zachování šířky

<table width="100%">
  <tr>
    <td><nobr>Programovací jazyky:</nobr></td>
    <td align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## Varianta I: HTML tabulka s cellpadding a cellspacing

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td>Programovací jazyky:</td>
    <td align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## Varianta J: HTML tabulka s třemi buňkami (prostřední jako spacer)

<table width="100%">
  <tr>
    <td>Programovací jazyky:</td>
    <td width="100%"></td>
    <td>
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## Varianta K: Markdown tabulka s předchystanou mezerou

| Programovací jazyky: | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg) |
| :------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## Varianta L: HTML div s použitím margin

<div>
  <span style="float:left">Programovací jazyky:</span>
  <span style="float:right">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
  </span>
  <div style="clear:both"></div>
</div>
