        // Typesetter のインスタンスを作成
        const typesetter = new Typesetter()
      
        // セレクターにマッチする要素に対して組版を適用
        typesetter.renderToSelector('.txt-box')
        const elements = document.querySelectorAll('.txt-box')
        typesetter.renderToElements(elements)