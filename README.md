# Javascript 3

## Pola 1: Persegi

```text
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

### Flowchart

```mermaid
flowchart TD
    Start@{ shape: start }
    StringInit@{ shape: rect, label: "result = #quot;#quot;" }
    RowIndexInit@{ shape: rect, label: "row = 1" }
    IsFifthRow@{ shape: decision, label: "row <= 5" }
    PrintResult@{ shape: lean-r, label: "result"}
    AppendResult@{ shape: rect, label: "result += #quot;* * * * *#92;n#quot;"}
    IncrRowIndex@{ shape: rect, label: row++ }
    End@{ shape: stop }

    Start --> StringInit --> RowIndexInit --> IsFifthRow

    IsFifthRow --true--> PrintResult

    IsFifthRow --false--> AppendResult --> IncrRowIndex --> IsFifthRow

    PrintResult --> End
```

## Pattern 2: Segitiga Siku

```text
* 
* * 
* * * 
* * * * 
* * * * * 
```

### Flowchart

```mermaid
flowchart TD
    Start@{ shape: start }
    StringInit@{ shape: rect, label: "result = #quot;#quot;" }
    RowIndexInit@{ shape: rect, label: "row = 1" }
    RowControl@{ shape: decision, label: "row <= 5" }
    MaxStarsInit@{ shape: rect, label: "maxStars = row"}
    StarsCounterInit@{ shape: rect, label: "starsCounter = 1" }
    StarControl@{ shape: decision, label: "starsCounter <= maxStars" }
    AddAStar@{ shape: rect, label: "result += #quot;* #quot;" }
    IncrStarsCounter@{ shape: rect, label: "starsCounter++" }
    AddNewline@{ shape: rect, label: "result += #quot;#92;n#quot;" }
    IncrRowIndex@{ shape: rect, label: row++ }
    End@{ shape: stop }

    Start --> StringInit --> RowIndexInit --> RowControl

    RowControl --true--> MaxStarsInit --> StarsCounterInit --> StarControl

    StarControl --true--> AddAStar --> IncrStarsCounter --> StarControl

    StarControl --false--> AddNewline --> IncrRowIndex --> RowControl

    RowControl --false--> PrintResult --> End
```

## Pola 3: Segitiga Sama Sisi (PR)

```text
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
```

### Flowchart

```mermaid
flowchart TD
    Start@{ shape: start }
    StringInit@{ shape: rect, label: "result = #quot;#quot;" }
    RowInit@{ shape: rect, label: "row = 1" }
    RowControl@{ shape: decision, label: "row <= 5" }
    MaxSpacesInit@{ shape: rect, label: "maxSpaces = 5 - row"}
    MaxStarsInit@{ shape: rect, label: "maxStars = row" }
    SpacesCounterInit@{ shape: rect, label: "spacesCount = 1" }
    SpacesControl@{ shape: decision, label: "spacesCount <= maxSpaces" }
    AddASpace@{ shape: rect, label: "result += #quot; #quot;" }
    IncrSpacesCounter@{ shape: rect, label: "spacesCount++" }
    StarsCounterInit@{ shape: rect, label: "starsCount = 1" }
    StarsControl@{ shape: decision, label: "starsCount <= maxStars" }
    AddAStar@{ shape: rect, label: "result += #quot;* #quot;"}
    IncrStarsCounter@{ shape: rect, label: "starsCount++" }
    AddNewline@{ shape: rect, label: "result += #quot;#92;n#quot;"}
    IncrRow@{ shape: rect, label: "row++" }
    PrintResult@{ shape: lean-r, label: "result" }
    End@{ shape: stop }

    Start --> StringInit --> RowInit --> RowControl
    
    RowControl --true-->  MaxStarsInit --> StarsCounterInit --> MaxSpacesInit --> SpacesCounterInit --> SpacesControl

    SpacesControl --true--> AddASpace --> IncrSpacesCounter --> SpacesControl

    SpacesControl --false--> StarsControl

    StarsControl --true--> AddAStar --> IncrStarsCounter --> StarsControl

    StarsControl --false--> AddNewline --> IncrRow --> RowControl

    RowControl --false--> PrintResult --> End
```

## Pola 4: Border Bersegi (PR)

```text
* * * * *
*          *
*          *
*          *
* * * * * 
```

### Flowchart

```mermaid
flowchart TD
    Start@{ shape: start }
    RowInit@{ shape: rect, label: "row = 1"}
    RowControl@{ shape: decision, label: "row <= 5"}
    FiveStarsRowControl@{ shape: decision, label: "row === 1 || row === 5" }
    AddFiveStars@{ shape: rect, label: "result += #quot;* * * * *#92;n#quot;" }
    AddTwoStars@{ shape: rect, label: "result += #quot;*        *#92;n#quot;"}
    IncrRow@{ shape: rect, label: "row++" }
    PrintResult@{ shape: lean-r, label: "result" }
    End@{ shape: stop }

    Start --> RowInit --> RowControl

    RowControl --true--> FiveStarsRowControl 

    FiveStarsRowControl --true--> AddFiveStars --> IncrRow
    FiveStarsRowControl --false --> AddTwoStars --> IncrRow

    IncrRow --> RowControl
    RowControl --false--> PrintResult --> End
```
