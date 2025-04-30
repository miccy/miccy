# Test zarovnání badges v GitHub README

Tento soubor obsahuje různé varianty řešení pro zarovnání textu doleva a badges doprava v GitHub README souborech. Cílem je najít metodu, která vytvoří vizuálně čistý layout bez viditelných okrajů tabulky.

## 1. Tabulka bez ohraničení pomocí HTML (border="0")

<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="left" valign="middle">Programovací jazyky:</td>
    <td align="right" valign="middle">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## 2. Tabulka s neviditelnými okraji pomocí atributu style

<table style="border: none;">
  <tr>
    <td style="border: none;" align="left" valign="middle">Programovací jazyky:</td>
    <td style="border: none;" align="right" valign="middle">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## 3. Alternativní řešení s flexboxem

<div style="display: flex; justify-content: space-between; align-items: center;">
  <span>Programovací jazyky:</span>
  <span>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
  </span>
</div>

## 4. HTML tabulka s prázdným bordercolor

<table bordercolor="#FFFFFF00">
  <tr>
    <td>Programovací jazyky:</td>
    <td align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## 5. Markdown tabulka s HTML entity jako spacer

| Programovací jazyky: | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg) |
|:-------------------- | -----------------------------------------------:|

## 6. Tabulka s neviditelnými okraji pomocí nastavení barvy

<table border="0" style="border-collapse: collapse;">
  <tr style="border: none;">
    <td style="border: none;">Programovací jazyky:</td>
    <td style="border: none; text-align: right;">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## 7. HTML tabulka s použitím &nbsp; pro zarovnání

<table>
  <tr>
    <td>Programovací jazyky:</td>
    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
    <td>
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## 8. Markdown tabulka bez okrajů

Programovací jazyky: | ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg)
:-- | --:

## 9. DIV řešení s inline-block elementy

<div>
  <div style="display: inline-block; vertical-align: middle; text-align: left;">Programovací jazyky:</div>
  <div style="display: inline-block; vertical-align: middle; float: right;">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
    <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
  </div>
</div>

## 10. Tabulka s width atributy

<table width="100%" border="0">
  <tr>
    <td width="250">Programovací jazyky:</td>
    <td align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## 11. Tabulka s frameborder

<table frameborder="0">
  <tr>
    <td>Programovací jazyky:</td>
    <td align="right">
      <img src="https://img.shields.io/badge/typescript-%23007ACC.svg" alt="TypeScript" />
      <img src="https://img.shields.io/badge/javascript-%23323330.svg" alt="JavaScript" />
    </td>
  </tr>
</table>

## 12. Tabulka s minimálním markdown formátováním

| Programovací jazyky: | <div align="right">![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg)</div> |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
