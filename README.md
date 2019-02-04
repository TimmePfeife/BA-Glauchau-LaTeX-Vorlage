# BA Glauchau LaTeX-Vorlage
Diese LaTeX-Vorlage entspricht fast den [Vorgaben](https://www.ba-glauchau.de/downloads/id/92/Hinweise%20zur%20Anfertigung%20von%20wissenschaftlichen%20Arbeiten.pdf) der [BA Glauchau](https://ba-glauchau.de/). Diese ist im Rahmen meiner eigenen Bachelorthesis entstanden und basiert auf den Vorlagen von [Ditti4](https://github.com/Ditti4/ba-gc-latex-vorlagen) und [MrDDRMann](https://github.com/MrDDRMann/LatexVorlage-Ba-Glauchau).

Diese Vorlage ist nicht perfekt. An manchen Stellen können neuere LaTeX-Pakete verwendet werden und viele Abstände sind nur nach Augenmaß bemessen. Im Gesamtpaket sieht es meiner Meinung nach trotzdem schicker aus, als in Word.

Wer Verbesserungsvorschlöge ö.Ä. hat, kann gern einen *Pull request* öffnen.

[Vorschau](Main.pdf)

# Verwendung
1. `git clone https://github.com/TimmePfeife/BA-Glauchau-LaTeX-Vorlage.git`
2. Einstellungen in `Metadaten.tex` anpassen
3. Arbeit mit Inhalt füllen
4. `Main.tex` kompilieren

*Hinweis:* Für das Syntax-Highlighting der Quellcodebeispiele wird das LaTeX-Paket [minted](https://ctan.org/pkg/minted?lang=de) verwendet. Dieses benötigt Python 2.7 oder neuer und die Python-Bibliothek [Pygments](http://pygments.org/). Pygments kann mit den folgenden Befehlen installiert werden:

- `sudo easy_install Pygments`
- `pip install Pygments` (Windows)

Außerdem muss die Option `--shell-escape` beim Kompilieren mit angegeben werden, z.B.:

`pdflatex.exe -synctex=1 --shell-escape  -interaction=nonstopmode %.tex`

# Tipps
- [TeXstudio](https://www.texstudio.org/) hat sich bisher als bester Editor bewiesen
- [LaTeX git-workflow](https://stackoverflow.com/a/6190412/6671811)
- Das Literaturverzeichnis lässt sich am besten mit [Citavi](https://www.citavi.com/de) erstellen und dann nach Bibtex exportieren
