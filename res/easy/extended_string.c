/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "../my_printf.h"

int main() {

    char str[] = { 'h', 'e', 9, 'o', 0 };

    my_printf("%S", str); // "he\011o"

    return 0;
}
